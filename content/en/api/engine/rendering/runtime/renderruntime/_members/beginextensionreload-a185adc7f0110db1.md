---
uid: api.a185adc7f0110db14da793c26f445dde8146106faa2b31fdddf6545fecc66369
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload"
source: xml
reviewed: 65f5ea9f9d284134a490a0dfda230fb64dc47094a13c5a5d433fe28a09618d05
title: "BeginExtensionReload"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Begins an isolated rendering-extension reload transaction at a frame boundary.

**Returns:** A transaction that preserves the active generation until its candidate is explicitly completed.

**Exception `T:System.InvalidOperationException`:** Thrown during an open frame, during retirement, after a terminal generation failure, or while another rendering reload transaction is active.
