---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5f2834bf7ac2e51ab587abcd4617f7bd3085b0c00f1f1b63d876fc441a0a3fd2
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.ListenOnce``1(System.Action{``0},System.Int32)
title: EventHub.ListenOnce
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 2ab99115e3078ada64832022f585335e67b70b812425f69141813d6e75e3b21c
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
