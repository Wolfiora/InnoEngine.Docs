---
uid: api.8e6cdb7110644bd5f59df6589bdeab535db783f74d40de58fcabdbbee8902452
symbol: "scripting:Inno.Editor.Panel.Inspector:M:InnoEditor.Inspection.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid})"
source: xml
reviewed: d3c2b75976a52d37c4917c3ecfcf5105f5a25b22f2d246ee94cf2b7a5e1ca6bf
title: "AssetReferenceDropTarget.Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: editor-script
apiScope: Editor
---

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

## Parameters

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
