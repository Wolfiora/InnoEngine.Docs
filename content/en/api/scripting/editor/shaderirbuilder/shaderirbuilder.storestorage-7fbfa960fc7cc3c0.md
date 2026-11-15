---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7fbfa960fc7cc3c0bf069b89bf7249be9aa6f158a12a4ec770a83ac3fdc3a718
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.StoreStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.StoreStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: b248028061f1e624788ca702bf5f620865a53bb5761618182441f9442025c741
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Stores a storage value without pruning unused writes or reordering surrounding memory operations.

## Parameters

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
