---
uid: api.956d76e34d1c2bf393c2109c0e005025a55ecb77c888d4b5c08aec4fa25ade41
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: b600199dd9175f1cfcc279e597df2d391cb563f41cb8a86d14aa225769ae8373
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a dynamic menu-source registration for an exact interaction surface.

**Parameter `area`:** The exact menu area that receives placements from the source.

**Parameter `priority`:** The ordering priority used when multiple dynamic sources contribute to the surface.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
