---
uid: api.010e1e5dc206c8ae50b16153cd506e54ce346742a05ca87fd79cf09e0590e5c3
symbol: "engine:Inno.Editor.Panel.Inspector:M:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid})"
source: xml
reviewed: 79c470dd8d8af3e9922f7b5855d4d4a0f4077629cc2bbc8c22f3de10eaef6ad5
title: "Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
---

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
