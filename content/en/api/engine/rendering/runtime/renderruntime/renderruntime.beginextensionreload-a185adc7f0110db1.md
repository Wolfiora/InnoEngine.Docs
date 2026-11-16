---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a185adc7f0110db14da793c26f445dde8146106faa2b31fdddf6545fecc66369
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload
title: RenderRuntime.BeginExtensionReload
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: e93dfe8fac0fc0738c68284c3a06f87967b4b1a1cd342af7095b7e4b737e3174
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
