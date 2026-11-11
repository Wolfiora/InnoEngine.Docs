---
title: RmlUi implementation boundary
description: Native document and frame-transfer ownership behind the managed RmlUi adapter.
uid: project.inno-native-ui
kind: project
owners:
  - Inno.Native.UI
---
# RmlUi implementation boundary

Inno.Native.UI implements the native bridge used by the [managed RmlUi adapter](inno-adapter-ui-rmlui.md). Ordinary engine consumers use [UI documents](../../manual/ui/use-documents.md) and neutral render frames rather than direct native calls.

## ABI and ownership contract

The managed backend owns sessions, documents, event transfers and frame acknowledgment. Shared process resources retain their owner-thread and final-session lifetime requirements. A frame is acknowledged only after the required transfer completes; borrowed input and native output storage cannot outlive their owners.

Session/document handles are transient implementation identities. They do not replace persistent IDs or managed resource ownership. The product must deploy a matching native module; a missing dependency remains an error.

Read [UI lifetimes](../../architecture/ui-lifetime.md), [render-frame consumption](../../extending/ui-render-frames.md) and [RmlUi integration](../../backends/rmlui.md) for the engine-facing contracts.

## Documentation scope

Raw C exports, generated storage layouts and binding members are outside this documentation. The [UI toolchain](inno-build-toolchains-ui.md) still explains preparation ownership, and native integration tests still validate the actual implementation.
