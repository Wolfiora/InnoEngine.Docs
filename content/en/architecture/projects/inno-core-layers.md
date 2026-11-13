---
title: Inno.Core.Layers
description: Ordered host lifecycle participants with independent event scopes and deterministic render unwind.
uid: project.inno-core-layers
kind: project
owners:
  - Inno.Core.Layers
---
# Inno.Core.Layers

This foundation composes Core Events and Execution into a backend-neutral layer stack. It orders attachments and callbacks without constructing windows, devices, sessions, assets or application services. It is not a replacement for the application Shell or RuntimeSession subsystem pipeline.

Use [lifecycle layers and overlays](../../extending/lifecycle-layers.md) for attachment, events, frame order and retryable detachment.

## Attachment and frame contract

Each attachment owns a distinct EventHub and attachment-scoped subscriptions. Base layers precede overlays; higher layers have higher hub order. A layer instance cannot hold multiple attachments. Its diagnostic name is not a stable identity.

Updates, render preparation and submission run bottom-to-top. Render completion unwinds top-to-bottom only for successful preparation callbacks, including after later failure. A partially failed preparation compensates its own partial resources. Hosts serialize mutation/frame work and keep membership stable during callbacks; the stack does not snapshot concurrent changes.

Attachment failure invokes detachment compensation before removing the entry. Detachment first removes subscriptions, then calls the layer's cleanup. Pending retirement keeps the current entry, its hub and lower resources alive and rejects ordinary mutation/frame calls. Retry through Clear or Dispose at the owner's safe point; use the shared outer retirement barrier when a deadline is required.

Ordinary cleanup failures permit eligible reverse-order cleanup and remain reportable. Clear becomes reusable after complete retirement. Dispose becomes permanently closed and idempotent only after completion. Protected event helpers require an active attachment and cannot be used during detachment. There is no script export, background update thread or automatic generation-state migration.

## API reference

Browse the [exact types and member contracts](../../api/engine/core/layers/index.md) in the selected CLR surface. Each declaration links to its captured source and preserves its shared constraints.
