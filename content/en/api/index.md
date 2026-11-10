---
title: API reference
description: Choose the API surface that matches your caller before looking up a declaration.
uid: api.home
kind: landing
---
# API reference

Choose the API surface your caller actually receives. Public CLR declarations, script projections, and native interfaces have different consumers and obligations.

| Surface | Intended use |
| --- | --- |
| Host runtime | Engine and runtime composition through managed contracts. |
| Host Editor | Editor composition and extension contracts available to the host. |
| Runtime scripts | The selected logical runtime API exported to project scripts. |
| Editor scripts | The selected logical Editor API exported to project scripts. |
| Backend/native | Adapter and ABI contracts with explicit target and resource restrictions. |
| Build/tooling | Build requests, immutable artifacts, validation, and documentation operations. |
| Test infrastructure | Public fixture contracts used by the corresponding validation owner. |

## Read a contract completely

Check the declaration, parameters, return value, observable failures, and linked shared constraints. A source link locates implementation; it does not replace documentation of ownership, threading, or release.

An exact signature match proves declaration coverage for the selected inputs. It does not prove that every documented behavior has been executed on every platform.

## Find the workflow first

If you are unsure which surface applies, start with the [Manual](../manual/index.md) or [extension guide](../extending/index.md). They explain the intended owner and link the relevant API rather than requiring assembly knowledge up front.
