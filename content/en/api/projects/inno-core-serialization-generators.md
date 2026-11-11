---
title: Inno.Core.Serialization.Generators
description: Compiler-owned converters and closed metadata access without runtime reflection fallback.
uid: project.inno-core-serialization-generators
kind: project
owners:
  - Inno.Core.Serialization.Generators
---
# Inno.Core.Serialization.Generators

This analyzer project supplies the DTO converter and closed metadata generators used by statically composed deployments. Roslyn calls their public `Initialize` methods. They are compiler integrations, not host registry instances or gameplay services.

Start with [supplying serialization metadata](../../extending/serialization-metadata.md) for registration, private shapes, diagnostic meanings and the difference between metadata and converter generation.

## Compilation and access contract

Generated DTO converters require supported concrete declarations, accessible construction, valid member access and unique keys. Identity graphs, polymorphism and custom restoration invariants require explicit converters rather than an assumed automatic DTO path.

Metadata generation emits typed member/construction/restoration access and supported closed collection operations in the owning compilation. Private lexical owners that must host generated accessors are nongeneric partial types. Private declarations keep their access level; a generator diagnostic is not permission to widen the product API.

Generated catalogs contribute to the actual product composition. Missing closed shapes fail explicitly; Core supplies no reflection fallback. Base declarations retain ownership of their own accessors and hooks. Output is owned by the compilation and is not maintained as handwritten source.

A compiled generator or reference page does not certify its emitted code for every target. Validate the actual generated declarations and applicable runtime-generator tests when extending supported shapes.

## API reference

Browse the [exact declarations and member contracts](../types/core-serialization-generators/index.md) in the selected CLR inventory. Source and script-projection certification remain separate.
