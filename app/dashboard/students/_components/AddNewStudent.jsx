"use client";
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false); // Fixed typo here
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Get all grades on initial render
  const GetAllgradesList = () => {
    GlobalApi.GetAllGrades().then(resp => {
      setGrades(resp.data);
    });
  };

  useEffect(() => {
    GetAllgradesList();
  }, []);

  // On form submission
  const onSubmit = (data) => {
    setLoading(true);
    GlobalApi.CreateNewStudent(data).then(resp => {
      console.log("--", resp);
      if (resp.data) {
        reset();
        setLoading(false);
        setOpen(false);
        toast('New Student Added!');
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      toast.error('Error adding student!');
    });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                placeholder="Ex. Manogya Bajracharya"
                {...register('name', { required: "Full name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="grade">Select Grade</label>
              <select
                id="grade"
                className="p-3 border rounded-lg"
                defaultValue=""
                {...register('grade', { required: "Grade is required" })}
              >
                {grades.map((item, index) => (
                  <option key={index} value={item.grade}>{item.grade}</option>
                ))}
                <option value="" disabled>Select Grade</option>
              </select>
              {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}
            </div>

            <div className="py-2">
              <label htmlFor="contact">Contact Number</label>
              <Input
                id="contact"
                type="number"
                placeholder="Ex. 123456789"
                {...register('contact', { required: "Contact number is required" })}
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
            </div>

            <div className="py-2">
              <label htmlFor="address">Address</label>
              <Input
                id="address"
                placeholder="Ex. Kupondole"
                {...register('address', { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            <div className="flex gap-3 items-center justify-end mt-5">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading} // Corrected 'disable' to 'disabled'
              >
                {loading ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  'Save'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
