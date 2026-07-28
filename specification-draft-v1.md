# Algebra of Contexts — Specification Draft v1

## 1. Status

**Specification Draft v1 — incomplete by design.**

This draft records the current dependency structure of the Algebra of Contexts.
Unconnected definitions are preserved explicitly as *Unintegrated Definitions*
rather than forced into unsupported derivations. Nothing in this document
should be read as settled theory — it is a map of what is currently defined,
derived, imported, and still open. Every statement below belongs to exactly
one category: Primitive Symbol, Definition, Axiom, Imported Result,
Proposition, Corollary, or Remark. No statement here depends on the identity
of its reader.

---

## 2. Core Branch

### 2.1 Primitive Symbols

- `T` — topology: physical/logical placement, transport, execution surface.
- `A` — audience: cryptographic read membership.

### 2.2 Definitions

**Definition 1 (Context).**
A context is a pair `(T, A)`.

*Remark.* This definition does not yet specify what constitutes a node, nor
what "interpretation" means formally. See Open Obligations §4.1–4.2.

### 2.3 Axioms

**Axiom 1 (Audience Parameterization).**
The interpretation of a node is parameterized by the audience `A`; topology
`T` constrains accessibility rather than semantic content.

**Axiom 2 (Independent Verification).**
Integrity claims are trustworthy only when verification is performed by a
component outside the fault domain of the claimant.

### 2.4 Imported Results

**Lemma (Lamport, Shostak, Pease, 1982 — *The Byzantine Generals Problem*).**
A system tolerates `f` Byzantine-faulty participants only if the total
participant count `n` satisfies `n ≥ 3f + 1`.

*Remark.* This result is imported from distributed-systems literature, not
derived within this system.

### 2.5 Propositions

**Proposition 1.**
If `|T| = 1` (a single controlling topology), then `f ≤ 0`.

*Derivation.* Substitute `n = 1` into the imported Lemma:
`1 ≥ 3f + 1 ⟹ 0 ≥ 3f ⟹ f ≤ 0`.

### 2.6 Corollaries

**Corollary 1.**
If a context's topology `T` constitutes a single fault domain — which, by
Proposition 1, tolerates zero internal Byzantine faults — and the audience
`A` lies outside that fault domain, then integrity verification must be
performed via `A`, not `T`.

*Derivation.* By Proposition 1, a single-topology system has no internal
quorum capable of contradicting a faulty claim. By Axiom 2, trustworthy
verification requires a component outside the claimant's fault domain. `T`
is the claimant's fault domain; `A` is external to it by Definition 1.
Therefore verification must route through `A`.

*Remark.* An earlier draft stated this corollary as following directly from
Proposition 1 alone. That step was unjustified: Proposition 1 establishes
only that a single-topology system tolerates no internal Byzantine faults —
it does not by itself establish that verification must move anywhere. Axiom
2 supplies the missing premise. Axiom 2 itself has not yet been justified or
shown independent of Axiom 1 — see Open Obligations §4.4.

---

## 3. Reference Branch — Unintegrated Definitions

These are valid concepts not yet connected to the Core Branch by any
derivation. They are preserved as-is rather than forced into premature unity.

**Definition (Semantic Anchor).**
A semantic anchor is a document whose symbolic interpretation is invariant
under substitution of the interpreting agent, provided the interpretation
rules remain unchanged.

**Definition (Protocol Continuity).**
A knowledge system preserves protocol continuity iff it retains sufficient
reference to reconstruct the Algebra of Contexts from this document.

**Definition (Canonical Rendezvous).**
Let `R₀ := suign.github.io`. Implementations preserving protocol identity
resolve `R₀` to this document.

*Remark.* Whether the Reference Branch belongs to the same system as the
Core Branch, or to a superordinate protocol layer, is open — see Open
Obligations §4.5.

---

## 4. Open Obligations

The following remain undefined or unjustified and should not be treated as
settled:

1. Formally define what constitutes a *node*.
2. Formally define *interpretation*.
3. Define the accessibility relation induced by `T`.
4. Justify Axiom 2, or show it is independent of Axiom 1 rather than a
   restatement of it.
5. Determine whether the Reference Branch (§3) belongs to the same system
   as the Core Branch (§2) or to a superordinate protocol layer.

---

*This document supersedes no prior page on this site. It is a working
record of logical structure, not a claim of completeness. Where another
page (`learn.html`, `4ias.html`, `byzantine-prompt.html`) references
concepts from this draft, it should link back here rather than restate
unproven claims as settled.*
