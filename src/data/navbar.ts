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
  description: string;
}

export const products_link: INavLinks[] = [
  {
    name: "Editor",
    icon: editor_icon,
    description: "Effective Visual Builder",
  },
  {
    name: "Interaction & Animation",
    icon: interaction_animation_icon,
    description: "Design interactive websites",
  },
  {
    name: "Grids & Layouts",
    icon: grid_layout_icon,
    description: "Structure more easily",
  },
  {
    name: "Media Manager",
    icon: media_manager_icon,
    description: "Manage & edit sites assets",
  },
  {
    name: "Typography",
    icon: typography_icon,
    description: "Customize your branding",
  },
  {
    name: "Form Builder",
    icon: form_builder_icon,
    description: "Optimize your SEO workflow",
  },
  {
    name: "Accessibility",
    icon: accessibility_icon,
    description: "Acessible to everyone",
  },
  {
    name: "Pop-up Builder",
    icon: pop_up_builder_icon,
    description: "Build pop-ups visually",
  },
  {
    name: "Figma to Droip",
    icon: figma_icon,
    description: "Turn static designs into live websites",
  },
  {
    name: "Content Management",
    icon: content_management_icon,
    description: "Centralize dynamic content management",
  },
];

export const resources_link: INavLinks[] = [
  {
    name: "Droip Blogs",
    icon: droip_blogs_icon,
    description: "Explore what's happening",
  },
  {
    name: "Documentation",
    icon: documentation_icon,
    description: "Learn from documentation",
  },
  {
    name: "Release Notes",
    icon: release_notes_icon,
    description: "Check what's new",
  },
];

export const support: INavLinks[] = [
  {
    name: "Get Support",
    icon: droip_blogs_icon,
    description: "Fix your issues with our experts",
  },
  {
    name: "Feature Request",
    icon: documentation_icon,
    description: "Let us know what's missing",
  },
  {
    name: "Contact",
    icon: release_notes_icon,
    description: "Contact for query",
  },
];
