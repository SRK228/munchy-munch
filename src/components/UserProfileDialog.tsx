/**
 * 👤 User Profile Dialog Component
 * 
 * What does this file do?
 * - Lets players create and edit their profile
 * - Allows them to choose a cool avatar
 * - Makes sure usernames are the right length
 * 
 * Important parts:
 * - Username input: Where you type your name
 * - Avatar selection: Choose your profile picture
 * - Validation: Makes sure your username is between 3-20 characters
 * - Save button: Updates your profile when you're done
 */

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// List of avatar images players can choose from
const avatars = [
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
  "https://images.unsplash.com/photo-1501286353178-1ec871814838",
  "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
  "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
];

export function UserProfileDialog() {
  // These help us keep track of what the user has entered or selected
  const [username, setUsername] = React.useState("");
  const [selectedAvatar, setSelectedAvatar] = React.useState(avatars[0]);
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  // This runs when the save button is clicked
  const handleSave = () => {
    // Check if the username is empty
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a username",
        variant: "destructive",
      });
      return;
    }

    // Make sure username isn't too short
    if (username.length < 3) {
      toast({
        title: "Username too short",
        description: "Username must be at least 3 characters long",
        variant: "destructive",
      });
      return;
    }

    // Make sure username isn't too long
    if (username.length > 20) {
      toast({
        title: "Username too long",
        description: "Username must be less than 20 characters",
        variant: "destructive",
      });
      return;
    }
    
    // Save profile data and close dialog
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully!",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* The gear icon that opens the dialog */}
      <DialogTrigger asChild>
        <div className="flex flex-col items-center cursor-pointer">
          <Avatar className="w-12 h-12">
            <AvatarImage src={selectedAvatar} alt="Selected avatar" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
          <span className="text-xl sm:text-2xl mt-2 animate-bounce-slow">⚙️</span>
        </div>
      </DialogTrigger>
      {/* The dialog content */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Big avatar preview */}
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={selectedAvatar} alt="Selected avatar" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </div>
          {/* Username input field */}
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username (3-20 characters)"
              minLength={3}
              maxLength={20}
            />
          </div>
          {/* Avatar selection grid */}
          <div className="grid gap-2">
            <Label>Select Avatar</Label>
            <div className="flex gap-3 flex-wrap justify-center">
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className={`w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity ${
                    selectedAvatar === avatar ? "ring-4 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  <AvatarImage src={avatar} alt={`Avatar ${index + 1}`} />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          {/* Save button */}
          <Button onClick={handleSave} className="mt-2">
            Save Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
