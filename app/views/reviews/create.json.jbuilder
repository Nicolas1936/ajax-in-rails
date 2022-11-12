# two scenarios
# if @review est enregistre
if @review.persisted?
  # renvoyer un nouvelle form qu'il puisse remplir
  json.my_form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: Review.new})
  # renvoyer la review qu'on veut injecter dans la page
  json.my_inserted_item render(partial: "restaurants/review", formats: :html, locals: {review: @review})
else
  # renvoyer la form avec les erreurs de validation
  json.my_form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: @review})
end

# if @review.persisted?
#   json.form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: Review.new})
#   json.inserted_item render(partial: "restaurants/review", formats: :html, locals: {review: @review})
# else
#   json.form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: @review})
# end
