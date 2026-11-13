---
uid: api.5f62e4afcc4c20491a87143b2735209e65b3145e4ba613feb9989c223fd07ce4
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorToolbarItemAttribute.#ctor(System.String,Inno.Editor.Interactions.EditorToolbarIcon,System.String,System.Int32,Inno.Editor.Interactions.EditorToolbarIcon)"
source: xml
reviewed: 7c7ac3ed1d37e529bd63ef07c71749b40391c87469297305555bec6d715abcd7
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a toolbar placement for the annotated targetless action.

**Parameter `area`:** The exact interaction area whose toolbar receives the action.

**Parameter `icon`:** The symbol shown while the action is not checked.

**Parameter `tooltip`:** The fallback tooltip shown when the action has no contextual display name.

**Parameter `order`:** The stable ordering value within the toolbar.

**Parameter `activeIcon`:** The symbol shown while the action is checked, or `F:Inno.Editor.Interactions.EditorToolbarIcon.None` to retain `icon`.

**Exception `T:System.ArgumentException`:** Thrown when `area` or `tooltip` is empty, or when `icon` is `F:Inno.Editor.Interactions.EditorToolbarIcon.None`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an icon value is not defined.
