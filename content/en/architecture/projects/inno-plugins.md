---
title: Inno.Plugins
description: The Player-safe manifest contract for a local plugin package.
uid: project.inno-plugins
kind: project
owners:
  - Inno.Plugins
---
# Inno.Plugins

This project owns `PluginManifest`, the serializable description of a local `.iplugin` package. It describes identity, dependency ordering, explicit overrides, content roots, assembly definitions and project-setting contributions. Installation, archive extraction and live activation belong to [Inno.Plugins.Authoring](inno-plugins-authoring.md).

Use [package a plugin](../../extending/plugin-packages.md) to understand the actual container and manifest requirements. The manifest is Player-safe; that does not make the authoring installation service part of a Player.

## Manifest contract

Use a stable valid lowercase asset-source ID and a nonblank display name. `project` is reserved. Dependencies and overrides are unique ordinal plugin IDs; a plugin cannot depend on itself, and every override must name a declared dependency.

The current container requires exactly one content root, `Assets`. Path arrays use portable container-relative paths and reject traversal, backslashes and case-insensitive duplicates. The presence of an array property is not support for arbitrary additional roots.

Setting contributions require distinct valid setting IDs, nonempty stable type IDs and nonempty serialized property payloads. Plugin IDs and setting IDs are semantic protocols, not object identities.

The manifest implements the shared `ISerializable` contract. `Plugin.inno` is serialized with the host's configured registry; it is not an ad hoc JSON document. There is no schema-version fallback or old-field alias reader. Extension types are discovered through their registries rather than listed in the manifest.

`Validate` checks manifest structure, not the installed dependency graph, file contents or successful script compilation. Invalid inputs can raise data-validation or identifier-validation exceptions; callers must not infer that every failure is the same exception type. A mutable manifest is not a published plugin catalog; validated candidates expose detached manifest copies.

## API reference

Browse [PluginManifest and its exact members](../../api/engine/plugins/index.md).
