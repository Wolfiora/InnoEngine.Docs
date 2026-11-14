---
uid: api.directory.engine.runtime.contracts
title: "Contracts"
kind: landing
owners: []
---

# Contracts

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IRuntimeSubsystem](iruntimesubsystem/index.md) | Participates in the ordered lifecycle of one isolated runtime session. |
| [IRuntimeSubsystemFactory](iruntimesubsystemfactory/index.md) | Creates one runtime subsystem instance for each declared Host or Session owner. |
| [RuntimeCapabilityId](runtimecapabilityid/index.md) | Identifies a backend-neutral capability supplied by composition, not an object or native handle. |
| [RuntimeFixedFrame](runtimefixedframe/index.md) | Provides immutable timing state to one deterministic fixed simulation step. |
| [RuntimeFrame](runtimeframe/index.md) | Provides immutable timing state to one variable runtime frame. |
| [RuntimeSubsystem](runtimesubsystem/index.md) | Enforces one control-thread lifecycle while derived runtimes compose their own domain services. |
| [RuntimeSubsystemCatalogAttribute](runtimesubsystemcatalogattribute/index.md) | Requests a generated partial method that gathers subsystem declarations with the same typed composition parameter. |
| [RuntimeSubsystemContext](runtimesubsystemcontext/index.md) | Exposes only foundation services and owner metadata, never a complete RuntimeSession or domain service locator. |
| [RuntimeSubsystemDescriptor](runtimesubsystemdescriptor/index.md) | Describes stable ordering and dependency requirements for one runtime subsystem. |
| [RuntimeSubsystemId](runtimesubsystemid/index.md) | Identifies one backend-neutral runtime subsystem protocol. |
| [RuntimeSubsystemLifetime](runtimesubsystemlifetime/index.md) | Identifies the exclusive owner that creates and retires a stable engine subsystem. |
| [RuntimeSubsystemRegistrationAttribute](runtimesubsystemregistrationattribute/index.md) | Declares a strongly typed composition method for build-time subsystem catalog generation. |
| [RuntimeSubsystemRequirement](runtimesubsystemrequirement/index.md) | Selects startup failure behavior without changing runtime-frame or retirement error semantics. |

