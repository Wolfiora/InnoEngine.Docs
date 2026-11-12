---
title: Inno.Core.Events
description: Ordered event hubs, routed consumption and bounded event admission.
uid: project.inno-core-events
kind: project
owners:
  - Inno.Core.Events
---
# Inno.Core.Events

This project owns event values, ordered hubs and the bounded dispatcher used by engine and script callers. It does not store current diagnostic state or persistent object identity. Start with [route and consume events](../../manual/events/route-events.md).

## Dispatch and lifetime contract

The dispatcher publishes ordered hub snapshots; each hub publishes listener buckets. Hub order descends, then creation sequence; dispatch visits the concrete event type and its base types in that order. Listener priority descends within each type bucket, with registration sequence breaking ties. Mutations publish a later snapshot rather than rewriting the one already traversed.

Thread-safe admission and snapshot management do not serialize arbitrary user handlers. `Emit`, `Announce`, `Flush` and completion observers execute on their caller's dispatch thread. Owners must coordinate their own state and quiescent retirement. A disposed hub removes its listeners and detaches; it does not promise to interrupt a callback already executing.

Listener delegates and subscription tokens can retain extension instances. Dispose every externally registered token and unregister `dispatched` observers before unload. A Layer owns subscriptions made through its protected convenience boundary; independently registered subscriptions remain the caller's responsibility. The dispatcher itself is not `IDisposable`.

`ListenOnce` unregisters after its first invocation and can be canceled by disposing its token. Base event constructors distinguish independent consumption from a routed representation sharing its source's global state. Hub consumption remains local to a valid dispatch stack.

## Built-in event families

| Family | Data |
| --- | --- |
| Application | Quit and suspension state. |
| Keyboard | Window identity, key and modifiers; presses also carry repeat state. |
| Mouse | Window identity, movement coordinates, wheel offsets or button. |
| Window | Resize dimensions, close, focus or effective visibility state. |

Keyboard/mouse values use `Inno.Core.Input`. The actual script export declaration selects `Event`, `EventDispatcher` and `EventHub` into `InnoEngine.Events`; the presence of other public CLR event types does not automatically export them to scripts.

## Failure and queue contract

Positive queue/flush budgets are required. Null events fail explicitly. Queue exhaustion rejects admission, and finite flushes leave recursively queued work for a later pass. Listener failures propagate; `dispatched` reports only completed hub traversal. An already globally consumed event skips hubs but still reaches completion observers.

The task guide explains explicit rejection, the valid use of `DiscardPending`, and routed-input consumption. These obligations apply to the reference members as a shared contract.

## Reference

[Browse exact event, dispatcher and hub declarations](../types/core-events/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-core-events/index.md)
