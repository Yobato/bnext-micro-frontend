"use client";
import React, { Suspense } from "react";
import { useToast } from "@bnext/context";
import { CardSkeleton, ErrorTimeout, FormSkeleton, Table, TableSkeleton } from "@bnext/ui";
// import Image from "next/image";

export default function Report() {
//   const { globalOnSuccess, globalOnError } = useToast();
  return (
    <>
      {/* <ErrorTimeout message="Timeout ketika mengambil data reservasi"/>
       */}
      <Suspense fallback={<TableSkeleton />}>
      <Table></Table>
      </Suspense>
      {/* <TableSkeleton/> */}
      {/* <CardSkeleton/> */}
      {/* <FormSkeleton/> */}
    </>
  );
}
