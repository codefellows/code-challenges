import datetime


class Shelter(object):
    """An animal shelter."""

    def __init__(self):
        """Construct an animal shelter."""
        self.cats = []
        self.dogs = []
        self.count = 0

    def enqueue(self, species):
        """Add a new animal to the shelter.

        We only accept "dog"s and "cat"s.
        """
        species = species.lower()
        if species not in ['dog', 'cat']:
            raise ValueError('The shelter is currently only accepting dogs or cats. Register a new "dog" or "cat"')

        animal = {'species': species, 'date': datetime.datetime.now()}
        if species == "dog":
            self.dogs.append(animal)
        else:
            self.cats.append(animal)

    def dequeue_any(self):
        """Remove the oldest animal."""
        if not len(self.dogs) and not len(self.cats):
            raise IndexError('This shelter has no animals.')

        if not len(self.dogs) and len(self.cats):
            return self.dequeue_cat()

        if not len(self.cats) and len(self.dogs):
            return self.dequeue_dog()

        if self.dogs[0].date < self.cats[0].date:
            output = self.dequeue_dog()
        else:
            output = self.dequeue_cat()

        return output

    def dequeue_dog(self):
        """Remove the oldest dog."""
        try:
            return self.dogs.pop(0)
        except IndexError:
            raise IndexError('This shelter has no dogs.')

    def dequeue_cat(self):
        """Remove the oldest cat."""
        try:
            return self.cats.pop(0)
        except IndexError:
            raise IndexError('This shelter has no cat.')
