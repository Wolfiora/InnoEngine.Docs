---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b7639bcf342b098e6d34f34e3692569cfa9d9ae1948033c1a166b057e7cf3f3c
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Listen``1(System.Action{``0},System.Int32)
title: EventHub.Listen
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 79a4196298edf422ab089928321713401e29eb41ed571a984a6cc7f3bf13eb69
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

A token that unsubscribes this listener when disposed.
