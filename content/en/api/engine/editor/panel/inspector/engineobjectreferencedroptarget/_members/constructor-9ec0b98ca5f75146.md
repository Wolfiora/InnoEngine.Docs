---
uid: api.9ec0b98ca5f7514671b1d0cfdc7573c8799d15aa37a374286eeb8b1a7b506939
symbol: "engine:Inno.Editor.Panel.Inspector:M:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{Inno.Scene.EngineObject})"
source: xml
reviewed: 57b3a9a202a8bc546c4c1153e94a453dcd3aec3702f38112e45a0d59f1f32a77
title: "Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
---

Creates a drop target that validates and assigns an engine object to a serialized property.

**Parameter `expectedType`:** The engine object type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted object to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
