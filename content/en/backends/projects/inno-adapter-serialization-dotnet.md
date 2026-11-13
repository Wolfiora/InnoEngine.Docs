---
title: Inno.Adapter.Serialization.DotNet
description: Explicit reflection-backed declaration metadata for desktop authoring and build hosts.
uid: project.inno-adapter-serialization-dotnet
kind: project
owners:
  - Inno.Adapter.Serialization.DotNet
---
# Inno.Adapter.Serialization.DotNet

This backend implements `ISerializationMetadataSource` through runtime reflection. It resolves members, construction, restoration and closed collection behavior for the exact selected declaration. The engine's neutral serialization foundation does not reference this implementation.

Use [dynamic .NET serialization metadata](../dotnet-serialization.md) for creation and integration, or choose [generated metadata](../../extending/serialization-metadata.md) for static deployment.

## Dynamic metadata contract

Select the provider explicitly in the same composition as the registry and type catalog. Unsupported declarations and invalid access/hook/revision metadata fail; the provider does not silently probe another implementation.

Metadata and reflection caches use weak type keys, but callers can still pin collectible generations by retaining returned accessors, delegates or live instances. Borrow metadata only for its valid generation and release external references before retirement. There is no process-global serialization service or public disposal protocol on the provider itself.

Member ordering, duplicate keys, visibility and restoration rules follow Core's contracts. Capture revisions must be complete, readable, nonpersistent and supported by Core's sealed identity declaration requirements. Pure-field evidence never treats an arbitrary getter as a direct primitive field. Missing proof preserves full serialization.

A generation lease does not make user getters, setters or converters thread-safe. Completion-hook and construction failures belong to the caller's transaction. This is a host adapter, not a Runtime script API.

## API reference

Browse the [exact declarations and member contracts](inno-adapter-serialization-dotnet.md) in the selected CLR inventory. Source and script-projection certification remain separate.
