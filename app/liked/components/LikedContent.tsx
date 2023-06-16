"use client";

import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import LikeButton from "@/components/LikeButton";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 px-6 text-neutral-400 w-full">
        No Liked Songs
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song?.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
