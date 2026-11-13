---
uid: api.956d76e34d1c2bf393c2109c0e005025a55ecb77c888d4b5c08aec4fa25ade41
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 29eeb7678c7737cf5cd59f2a9c61f62a6693c5ee1df9c535ddd94acffbbe25c5
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
