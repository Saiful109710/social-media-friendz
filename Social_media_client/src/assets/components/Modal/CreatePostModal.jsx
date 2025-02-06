import React, { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import axios from "axios";
import useGetPost from "../../../hooks/useGetPost";

const CreatePostModal = ({ open, close, isOpen }) => {
  const { refetch } = useGetPost();
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    text: "",
    media: "",
  });

  const handleFileChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("image") ? "image" : "video";
      setMediaType(fileType);
      setMedia(URL.createObjectURL(file));
      const form = new FormData();
      form.append("image", file);
      const photoUrl = await axios.post(
        `https://api.imgbb.com/1/upload?key=1e5fa25203ec33bf6ad732255ddc667a`,
        form
      );
      console.log(photoUrl.data.data.url);
      setFormData({ ...formData, media: photoUrl.data.data.url });
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { data } = await axios.post(
      "http://localhost:3000/createPost",
      formData
    );
    refetch();

    console.log(data);
  };
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6 bg-black backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Create A Post
              </DialogTitle>
              <form onSubmit={handleSubmit} action="">
                <textarea
                  placeholder="Write here"
                  className="border-none w-full outline-none"
                  rows="3"
                  name="text"
                  onChange={handleInputChange}
                  id=""
                ></textarea>
                <div className="w-full min-h-[200px] flex justify-center items-center">
                  {media ? (
                    <div className="mt-4 w-full max-w-md">
                      {mediaType === "image" ? (
                        <img
                          src={media}
                          alt="Uploaded"
                          className="w-full rounded-lg"
                        />
                      ) : (
                        <video controls className="w-full rounded-lg">
                          <source src={media} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        accept="image/*,video/*"
                        name="media"
                        className=" border p-2 cursor-pointer"
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    className="inline-flex  items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                    type="submit"
                  >
                    Post
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CreatePostModal;
