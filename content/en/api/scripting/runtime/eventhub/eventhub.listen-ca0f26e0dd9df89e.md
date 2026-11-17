---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ca0f26e0dd9df89e7dcf37a624898bb39f4887953af90d201d6b244bf484e106
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Listen``1(System.Action{``0},System.Int32)
title: EventHub.Listen
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 5acf5344252f3b40e921a0dde0021ee070bded5d2c9524b4cd36df1141e2eeef
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

A token that unsubscribes this listener when disposed.
