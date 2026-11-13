---
title: Resource ownership and lifetime
description: Understand creation, borrowing, cancellation, retirement, and release across engine boundaries.
uid: architecture.ownership
kind: explanation
aliases:
  - ownership
  - resource ownership
  - resource lifetime
  - 资源所有权
---
# Resource ownership and lifetime

Every resource needs a clear answer to four questions: who creates it, who may use it, how long that use is valid, and who releases it. An object reference alone does not answer those questions.

## Owned and borrowed resources

An owner is responsible for the resource's lifecycle. A borrower may use it only within the contract supplied by that owner. Passing an object to a method, copying an identity, or completing an asynchronous operation does not automatically transfer ownership.

Read each API's transfer and disposal contract. Do not infer ownership from the presence of `IDisposable`, a public constructor, or a familiar method name.

## Asynchronous work

Cancellation must reach the operation and its child work. Observe task and process completion rather than leaving work running after the owner retires. An `await` does not by itself restore an engine-specific owner thread.

Native callbacks must not access a released owner. Unregistration, draining, and final release have to follow the backend's protocol. Exceptions must not cross an unmanaged callback boundary.

## Generations and retirement

A generation may contain assemblies, registrations, callbacks, devices, or derived resources. Retirement first prevents new use, then drains existing work and releases references in the required order.

Long-lived state stores stable identities and neutral data instead of retaining collectible-generation types, delegates, or runtime objects. A replacement is accepted only after its candidate state is prepared and validated.

Failed retirement is a visible fault. Do not report completion merely because a task finished or a collection was cleared. GPU completion, process exit, and generation collectability are distinct conditions.

## Immutable artifacts and leases

A published artifact is tied to its content identity. A consumer's lease protects the selected generation for the duration of its use. A cache hit does not remove the need for correct selection, integrity validation, and reading protection.

Old generations can be retired only after their active readers and dependencies permit it. Cleanup after a successful commit must be distinguished from failure to publish the new generation.

## Before retaining a resource

Check the API's owner, permitted thread, borrowing interval, cancellation behavior, release order, and failure state. If a contract does not make these explicit, resolve that ambiguity before extending the resource's lifetime.

[Execution scopes and retirement](execution-and-retirement.md) explains the concrete Core primitives for revocable access, admitted tasks and dependency-safe release.
