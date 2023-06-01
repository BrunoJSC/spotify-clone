"use client";

import qs from "query-string";

import useDebounce from "@/hooks/SearchInput";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you to listen to ?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
