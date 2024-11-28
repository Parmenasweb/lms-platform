"use client";

import React from "react";
import { Category } from "@prisma/client";
import { IconType } from "react-icons";

import {
  FcServices,
  FcElectronics,
  FcProcess,
  FcDatabase,
  FcWorkflow,
  FcPrivacy,
  FcStatistics,
} from "react-icons/fc";
import CategoryItem from "./CategoryItem";

type Props = {
  items: Category[];
};

const iconMap: Record<Category["name"], IconType> = {
  repair: FcServices,
  Hardware: FcElectronics,
  software: FcProcess,
  "Data recovery": FcDatabase,
  DevOps: FcWorkflow,
  Cybersecurity: FcPrivacy,
  "Data Science": FcStatistics,
};

const Categories: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export default Categories;
