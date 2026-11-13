---
title: Native deployment lookup boundary
description: How engine consumers locate explicitly deployed native dependencies.
uid: api.projects.inno-native-libraryloading
kind: project
owners:
  - Inno.Native.LibraryLoading
contracts:
  - architecture.build-artifacts
---
# Native deployment lookup boundary

Inno.Native.LibraryLoading resolves the library and tool mappings written by product composition. It does not discover a source checkout or search native build caches. The engine's [build artifact and deployment model](../../architecture/build-artifacts.md) explains how those mappings are prepared.

## Ownership and failure contracts

A validated deployed path is not a loaded module or a lifetime lease. The actual backend consumer owns module loading and release and keeps it alive through resource cleanup. Missing mappings, invalid paths and incomplete deployments fail explicitly instead of selecting a different cached library.

The target and logical file mappings come from product composition. They are not inferred from host operating-system names or guessed file suffixes. Static linkage uses its declared link inputs rather than this dynamic lookup path.

## Documentation scope

This page identifies the engine's deployment responsibility. Low-level native loading and binding member references are outside the product documentation scope; engine users enter through the relevant managed service or backend integration guide.
