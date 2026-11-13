---
title: Glossary
description: The terms used throughout InnoEngine's manuals and API contracts.
uid: about.glossary
kind: explanation
---
# Glossary

These terms describe concrete responsibilities and lifetimes. Use them consistently when reading an API contract or designing an extension.

| Term | Meaning |
| --- | --- |
| Owner | The component responsible for a resource's lifetime, shutdown, and final release. |
| Borrowed resource | A resource another owner retains; the borrower cannot assume destruction rights or unlimited lifetime. |
| Lease | Explicit protection that keeps a resource or artifact generation available during use. |
| Generation | A particular incarnation of a registration, assembly set, or resource. An old generation cannot be treated as current. |
| Retirement | The controlled end of a generation: stop new work, drain existing use, and release owned references and resources. |
| Persistent identity | A stable identifier used across saving and reconstruction. It is not a live object reference. |
| Runtime identity | An identity valid within a live registry/domain and registration generation. |
| Missing | An unresolved state that retains the identity and neutral data needed for later recovery. It is not deletion. |
| Host | The component that supplies environment-specific services and owns an execution/session lifetime. |
| Backend | An implementation of a neutral engine capability, with its own native and third-party constraints. |
| Product | An explicit composition of engine capabilities, platform integrations, and deployment inputs. |
| Script projection | The selected logical API exposed to scripts; it is not the complete set of public CLR members. |
| Last-good state | The accepted state retained when preparing or validating a replacement fails. |
| Snapshot | A fixed view of content or state, identified independently from later mutable inputs. |

Read [ownership and lifetime](../architecture/ownership.md) before implementing code that stores borrowed objects, starts background work, or participates in reload.
