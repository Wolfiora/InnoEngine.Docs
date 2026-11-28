---
uid: api.directory.scripting.runtime._projects.runtime.contracts
title: "Contracts"
kind: landing
owners: []
---

# Contracts

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IRuntimeSubsystem](../../../iruntimesubsystem/index.md) | Participates in the ordered lifecycle of one isolated runtime session. |
| [IRuntimeSubsystemActivator](../../../iruntimesubsystemactivator/index.md) | Constructs a subsystem after its declaration has passed scope and dependency checks. An attributed implementation in a deployed module is discoverable in Editor and Player. |
| [RuntimeCapabilityID](../../../runtimecapabilityid/index.md) | Identifies a backend-neutral capability supplied by composition, not an object or native handle. |
| [RuntimeFixedFrame](../../../runtimefixedframe/index.md) | Provides immutable timing state to one deterministic fixed simulation step. |
| [RuntimeFrame](../../../runtimeframe/index.md) | Provides immutable timing state to one variable runtime frame. |
| [RuntimeSubsystem](../../../runtimesubsystem/index.md) | Enforces one control-thread lifecycle while derived runtimes compose their own domain services. |
| [RuntimeSubsystemContext](../../../runtimesubsystemcontext/index.md) | Exposes only foundation services and owner metadata, never a complete RuntimeSession or domain service locator. |
| [RuntimeSubsystemExtensionAttribute](../../../runtimesubsystemextensionattribute/index.md) | Declares the stable identity, owner and dependencies of a discoverable subsystem activator. |
| [RuntimeSubsystemLifetime](../../../runtimesubsystemlifetime/index.md) | Identifies the exclusive owner that creates and retires a stable engine subsystem. |

