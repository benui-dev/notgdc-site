module Jekyll
  module NotGDCFilters
    def shuffle(array, seed)
      array.shuffle(random: Random.new(seed))
    end
  end
end

Liquid::Template.register_filter(Jekyll::NotGDCFilters)