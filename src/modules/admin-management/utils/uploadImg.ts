import { httpsCallable } from "firebase/functions";
import { functions } from "../../../firebase.config";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      reject(new Error("Không thể đọc file ảnh"));
    };

    reader.readAsDataURL(file);
  });
};

export const uploadImage = async (file: File, type: string) => {
  if (!file) {
    throw new Error("Vui lòng chọn ảnh");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("File phải là hình ảnh");
  }

  const maxSize = 10 * 1024 * 1024;

  if (file.size > maxSize) {
    throw new Error("Ảnh không được vượt quá 3MB");
  }

  const imageBase64 = await fileToBase64(file);

  const uploadImageFn = httpsCallable(functions, "uploadImage");

  const res: any = await uploadImageFn({
    imageBase64,
    type
  });

  return res.data as {
    success: boolean;
    url: string;
  };
};
