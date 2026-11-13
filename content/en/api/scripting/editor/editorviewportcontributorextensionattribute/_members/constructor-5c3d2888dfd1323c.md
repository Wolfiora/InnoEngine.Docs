---
uid: api.5c3d2888dfd1323c75d6bf593844cd2bad32835b32df6428e09d86c8c114c481
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.#ctor(System.String,System.String,System.Int32,System.Int32)"
source: xml
reviewed: 7dd6aa4ef03781e7b88a9f300057b7eca99d5388ced2382a2e34fd9c150b4de5
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates a viewport contributor declaration.

**Parameter `id`:** Globally stable contributor identity.

**Parameter `kind`:** Open viewport purpose handled by the contributor.

**Parameter `order`:** Ascending model-composition order within the viewport.

**Parameter `controllerPriority`:** Priority used to select the contributor that owns navigation, tools, and pointer interaction.
