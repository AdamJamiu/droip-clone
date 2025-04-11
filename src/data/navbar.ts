"use client";

// Porducts icon imports
import editor_icon from "../assets/images/editor-icon.svg";
import interaction_animation_icon from "../assets/images/interaction-animation-icon.svg";
import grid_layout_icon from "../assets/images/grid-layout-icon.svg";
import media_manager_icon from "../assets/images/media-manager-icon.svg";
import typography_icon from "../assets/images/typography-icon.svg";
import form_builder_icon from "../assets/images/form-builder-icon.svg";
import accessibility_icon from "../assets/images/accessibility-icon.svg";
import pop_up_builder_icon from "../assets/images/pop-up-builder-icon.svg";
import figma_icon from "../assets/images/figma-icon.svg";
import content_management_icon from "../assets/images/content-manager-iocn.svg";
import droip_blogs_icon from "../assets/images/droip-blogs-icon.svg";
import documentation_icon from "../assets/images/documentation-icon.svg";
import release_notes_icon from "../assets/images/release-notes-icon.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface INavLinks {
  name: string;
  icon: string | StaticImport;
}

export const products_link: INavLinks[] = [
  {
    name: "Editor",
    icon: editor_icon,
  },
  {
    name: "Interaction & Animation",
    icon: interaction_animation_icon,
  },
  {
    name: "Grids & Layouts",
    icon: grid_layout_icon,
  },
  {
    name: "Media Manager",
    icon: media_manager_icon,
  },
  {
    name: "Typography",
    icon: typography_icon,
  },
  {
    name: "Form Builder",
    icon: form_builder_icon,
  },
  {
    name: "Accessibility",
    icon: accessibility_icon,
  },
  {
    name: "Pop-up Builder",
    icon: pop_up_builder_icon,
  },
  {
    name: "Figma to Droip",
    icon: figma_icon,
  },
  {
    name: "Content Management",
    icon: content_management_icon,
  },
];

export const resources_link: INavLinks[] = [
  {
    name: "Droip Blogs",
    icon: droip_blogs_icon,
  },
  {
    name: "Documentation",
    icon: documentation_icon,
  },
  {
    name: "Release Notes",
    icon: release_notes_icon,
  },
];
