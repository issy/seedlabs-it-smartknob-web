import React, { PropsWithChildren } from "react";
import { ReactElement, useEffect, useState } from "react";
import "./DashItem.scss";

interface DashItemProps extends PropsWithChildren {
  title: string;
  index: number;
  status?: string;
  saveState?: boolean;
}

const DashItem: React.FC<DashItemProps> = ({
  title,
  index,
  status,
  saveState,
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (saveState && localStorage.getItem(title + index) !== null) {
      setOpen(localStorage.getItem(title + index) === "true");
    }
  }, []);
  return (
    <div className={`item_container relative ${open ? "active" : ""}`}>
      <header
        onClick={() => {
          saveState && localStorage.setItem(title + index, (!open).toString());
          setOpen(!open);
        }}
      >
        <div>
          <h3>[{index}]</h3>
          <h1>{title}</h1>
        </div>
        <span>{open ? ">" : "<"}</span>
        {status ? (
          <p className="absolute left-2 top-1 text-xs">
            {status ? status : "STATUS: OK"}
          </p>
        ) : null}
      </header>
      <div className="item_inner_container">{children}</div>
    </div>
  );
};

export default DashItem;
