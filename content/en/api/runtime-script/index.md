---
title: Runtime script API
description: Exact logical declarations and required caller contracts for the runtime-script surface.
uid: api.runtime-script
kind: landing
contracts:
  - manual.scripting.use-script-api
---
# Runtime script API

Use this surface from project Runtime scripts. These are the logical declarations selected by the actual Runtime compiler profile, including renamed namespaces and types. They are distinct from the host CLR API.

## Start with a task

- [Select and use the script API](../../manual/scripting/use-script-api.md).
- [Generate IDE projects and compile scripts](../../contributing/compile-project-scripts.md).
- [Understand compilation and activation](../../manual/scripting/compile-and-reload.md).

## Caller obligations

Keep the containing owner and generation alive while using borrowed objects. Logical names do not change resource ownership, threading or retirement obligations. Each type links its module contract and the script calling guide; read both before relying on a member.

A constructor labeled as an IDE projection artifact is not a supported construction path. Obtain that object from its documented owner or factory. An IDE completion entry does not prove runtime availability.

## Exact reference by owner

The owner list below is secondary navigation derived from the bound compiler capture. You do not need to know assembly names to follow the tasks above. Declaration coverage is separate from matching source and executable-example certification.

- [Inno.Animation](inno-animation/index.md)
- [Inno.Assets](inno-assets/index.md)
- [Inno.Audio](inno-audio/index.md)
- [Inno.Core.Diagnostics](inno-core-diagnostics/index.md)
- [Inno.Core.Events](inno-core-events/index.md)
- [Inno.Core.Graphs](inno-core-graphs/index.md)
- [Inno.Core.Identity](inno-core-identity/index.md)
- [Inno.Core.Input](inno-core-input/index.md)
- [Inno.Core.Logging](inno-core-logging/index.md)
- [Inno.Core.Mathematics](inno-core-mathematics/index.md)
- [Inno.Core.Serialization](inno-core-serialization/index.md)
- [Inno.Core.Settings](inno-core-settings/index.md)
- [Inno.Editor.Annotations](inno-editor-annotations/index.md)
- [Inno.Extensibility.Types](inno-extensibility-types/index.md)
- [Inno.Input](inno-input/index.md)
- [Inno.References](inno-references/index.md)
- [Inno.Rendering](inno-rendering/index.md)
- [Inno.Rendering.Assets](inno-rendering-assets/index.md)
- [Inno.Rendering.Runtime](inno-rendering-runtime/index.md)
- [Inno.Runtime](inno-runtime/index.md)
- [Inno.Scene](inno-scene/index.md)
- [Inno.Storage](inno-storage/index.md)
- [Inno.Text](inno-text/index.md)
- [Inno.UI](inno-ui/index.md)

## Related surfaces

See the [other script surface](../editor-script/index.md) and [API reference overview](../index.md) before choosing a host or script declaration.
