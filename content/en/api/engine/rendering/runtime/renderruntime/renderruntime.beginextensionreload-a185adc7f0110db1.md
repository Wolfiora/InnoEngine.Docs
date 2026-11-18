---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a185adc7f0110db14da793c26f445dde8146106faa2b31fdddf6545fecc66369
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload
title: RenderRuntime.BeginExtensionReload
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: a3d16c9d9d7c3948eb7649b5e6475ffb49c87c896a1a0b80d736e7b9cfb0ecf0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A transaction that preserves the active generation until its candidate is explicitly completed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an open frame, during retirement, after a terminal generation failure, or while another rendering reload transaction is active.
