---
uid: api.010e1e5dc206c8ae50b16153cd506e54ce346742a05ca87fd79cf09e0590e5c3
symbol: "engine:Inno.Editor.Panel.Inspector:M:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid})"
source: xml
reviewed: abad58880e02fa687493239e8b22463239e981d4315952f1e5257ecc4d633733
title: "AssetReferenceDropTarget.Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
---

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
