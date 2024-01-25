import { useEffect, useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { Blog } from "../../../../Context/Context";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { toast } from "react-toastify";
import useSingleFetch from "../../../hooks/useSingleFetch";

const SavedPost = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { currentUser } = Blog();
  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useSingleFetch(
    "users",
    currentUser?.uid,
    "savePost"
  );

  useEffect(() => {
    setIsSaved(data && data.find((item) => item.id === post.id));
  }, [data, post?.id]);

  const handleSave = async () => {
    try {
      if (currentUser) {
        const saveRef = doc(
          db,
          "users",
          currentUser?.uid,
          "savePost",
          post?.id
        );

        if (isSaved) {
          await deleteDoc(saveRef);
          toast.success("Post has been unsaved");
        } else {
          await setDoc(saveRef, {
            ...post,
          });
          toast.success("Post has been Saved");
        }
      }
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };
  return (
    <>
      <button onClick={handleSave} className="hover:opacity-60">
        <CiSaveDown2
          className={`text-2xl pointer-event-none
        ${isSaved ? "text-yellow-600" : ""}
        `}
        />
      </button>
    </>
  );
};

export default SavedPost;
