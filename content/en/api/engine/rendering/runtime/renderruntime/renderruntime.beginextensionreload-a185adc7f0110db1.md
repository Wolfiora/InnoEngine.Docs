---
uid: api.a185adc7f0110db14da793c26f445dde8146106faa2b31fdddf6545fecc66369
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload"
source: xml
reviewed: aca972d1adb0e4c98347ae1d2a00d625b1643b6d6016f4d2958fcccd6d49e864
title: "RenderRuntime.BeginExtensionReload"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Begins an isolated rendering-extension reload transaction at a frame boundary.

## Returns

A transaction that preserves the active generation until its candidate is explicitly completed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an open frame, during retirement, after a terminal generation failure, or while another rendering reload transaction is active.
