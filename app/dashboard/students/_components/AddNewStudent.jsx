"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data", data);
    // Close the dialog after submission
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label htmlFor="name">Full Name</label>
                  <Input
                    id="name"
                    placeholder="Ex. Manogya Bajracharya"
                    {...register('name', { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="grade">Select Grade</label>
                  <select
                    id="grade"
                    className="p-3 border rounded-lg"
                    defaultValue=""
                    {...register('grade', { required: "Grade is required" })}
                  >
                    <option value="" disabled>
                      Select Grade
                    </option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                  </select>
                  {errors.grade && (
                    <p className="text-red-500 text-sm">{errors.grade.message}</p>
                  )}
                </div>

                <div className="py-2">
                  <label htmlFor="contact">Contact Number</label>
                  <Input
                    id="contact"
                    type="number"
                    placeholder="Ex. 123456789"
                    {...register('contact', { required: "Contact number is required" })}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm">{errors.contact.message}</p>
                  )}
                </div>

                <div className="py-2">
                  <label htmlFor="address">Address</label>
                  <Input
                    id="address"
                    placeholder="Ex. Kupondole"
                    {...register('address', { required: "Address is required" })}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}
                </div>

                <div className="flex gap-3 items-center justify-end mt-5">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
