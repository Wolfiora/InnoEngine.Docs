---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f2834bf7ac2e51ab587abcd4617f7bd3085b0c00f1f1b63d876fc441a0a3fd2
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.ListenOnce``1(System.Action{``0},System.Int32)
title: EventHub.ListenOnce
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
sourceFingerprint: edaa0aee3bd08e33cd952f08972f2637cf907b88597bddad3200d99594ff8c4d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TEvent`:** Event type to listen for.

## Parameters

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier; a base-type listener does not precede a concrete-type listener because of its priority.

## Returns

A token that can cancel the one-shot listener before it runs.
