---
uid: api.9ec0b98ca5f7514671b1d0cfdc7573c8799d15aa37a374286eeb8b1a7b506939
symbol: "engine:Inno.Editor.Panel.Inspector:M:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{Inno.Scene.EngineObject})"
source: xml
reviewed: 12d183c61e12c3bd6c8ef76d6d1c5af50a44f38fe36e5666a498ca17bbc34eb0
title: "EngineObjectReferenceDropTarget.Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
---

Creates a drop target that validates and assigns an engine object to a serialized property.

**Parameter `expectedType`:** The engine object type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted object to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
