---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7fbfa960fc7cc3c0bf069b89bf7249be9aa6f158a12a4ec770a83ac3fdc3a718
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.StoreStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.StoreStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 56a6c75ef9d0c8759100f3106eee8580e40ba677afe5de0968a63a85c9a803be
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
