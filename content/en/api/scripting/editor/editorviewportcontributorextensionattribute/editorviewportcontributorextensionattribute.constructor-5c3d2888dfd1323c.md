---
uid: api.5c3d2888dfd1323c75d6bf593844cd2bad32835b32df6428e09d86c8c114c481
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.#ctor(System.String,System.String,System.Int32,System.Int32)"
source: xml
reviewed: e48bae0dc92460e07105dc16cbf25e14408cdae5e19f43cbea620a8a22a3293c
title: "EditorViewportContributorExtensionAttribute.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates a viewport contributor declaration.

## Parameters

**Parameter `id`:** Globally stable contributor identity.

**Parameter `kind`:** Open viewport purpose handled by the contributor.

**Parameter `order`:** Ascending model-composition order within the viewport.

**Parameter `controllerPriority`:** Priority used to select the contributor that owns navigation, tools, and pointer interaction.
