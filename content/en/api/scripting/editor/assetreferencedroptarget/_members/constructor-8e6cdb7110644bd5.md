---
uid: api.8e6cdb7110644bd5f59df6589bdeab535db783f74d40de58fcabdbbee8902452
symbol: "scripting:Inno.Editor.Panel.Inspector:M:InnoEditor.Inspection.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid})"
source: xml
reviewed: f8db34beac10d8311a93ca3ed44d27125815e66e4563a136ff9fafb7b2fd9029
title: "Constructor"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: editor-script
apiScope: Editor
---

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.
