---
uid: api.directory.engine.editor.shaders
title: "Shaders"
kind: landing
owners: []
---

# Shaders

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [ImGui](imgui/index.md) | Reusable shader-node, material and parameter inspection presentation over shared authoring services. |

## Types

| Type | Purpose |
| --- | --- |
| [MaterialDocuments](materialdocuments/index.md) | Owns Material authoring sessions; native source editing uses the shared asset draft lifecycle. |
| [ShaderInspectionSelection](shaderinspectionselection/index.md) | Identifies a shader document and selected nodes without retaining a graph, extension object or delegate. |
| [ShaderParameterPresentation](shaderparameterpresentation/index.md) | Stores Editor-only parameter presentation by stable binding identity in the Shader&#39;s authoring graph. |
| [ShaderPreviewContext](shaderpreviewcontext/index.md) | Carries frame-only preview inputs; persistent provider state must retain stable values rather than this object. |
| [ShaderPreviewProvider](shaderpreviewprovider/index.md) | Builds domain-owned preview geometry and pass inputs without changing a scene or canonical asset. |
| [ShaderPreviewProviderAttribute](shaderpreviewproviderattribute/index.md) | Associates a reloadable preview implementation with one open Shader contract. |

