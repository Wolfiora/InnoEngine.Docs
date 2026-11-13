---
uid: api.74eeeecbb60b6cf8ef70e2f45e3ba2f7ea66bf3a47cf825044bb1fbdee227508
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorToolbarItemAttribute.#ctor(System.String,InnoEditor.Interactions.EditorToolbarIcon,System.String,System.Int32,InnoEditor.Interactions.EditorToolbarIcon)"
source: xml
reviewed: adab7434b8e7f0343197c01a695488259371182f686029a393847af35902da7c
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a toolbar placement for the annotated targetless action.

**Parameter `area`:** The exact interaction area whose toolbar receives the action.

**Parameter `icon`:** The symbol shown while the action is not checked.

**Parameter `tooltip`:** The fallback tooltip shown when the action has no contextual display name.

**Parameter `order`:** The stable ordering value within the toolbar.

**Parameter `activeIcon`:** The symbol shown while the action is checked, or `F:InnoEditor.Interactions.EditorToolbarIcon.None` to retain `icon`.

**Exception `T:System.ArgumentException`:** Thrown when `area` or `tooltip` is empty, or when `icon` is `F:InnoEditor.Interactions.EditorToolbarIcon.None`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an icon value is not defined.
